// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Chatbot functionality
        const responses = {
            'ai automation': "Anshul specializes in AI-powered workflow automation and business process optimization. He creates intelligent systems that streamline operations, reduce manual tasks, and enhance productivity using Python and modern AI frameworks. His expertise includes building custom automation solutions that integrate seamlessly with existing business processes.",
            'projects': "Anshul has worked on various innovative projects including AI workflow automation systems, MERN stack applications, Java enterprise solutions, and database management systems. His portfolio showcases full-stack development capabilities with a focus on scalable, efficient solutions. You can view his complete portfolio on GitHub at github.com/Axshul",
            'availability': "Yes! Anshul is currently available for both freelance projects and full-time opportunities. He's based in Bhopal, India, and works with clients globally on remote projects. He's particularly interested in AI automation, full-stack development, and innovative tech solutions. You can reach him at anshul2006n@gmail.com",
            'tech stack': "Anshul's comprehensive tech stack includes: Frontend (React.js, JavaScript, HTML/CSS, Tailwind CSS), Backend (Java, Python, Node.js), Databases (PostgreSQL, Supabase, MongoDB), and AI/Automation tools. He's proficient in the full MERN stack development and specializes in creating end-to-end solutions.",
            'skills': "Anshul combines technical expertise with creative problem-solving. His core competencies include full-stack web development, AI automation, database architecture, business process optimization, and system integration. He's passionate about leveraging cutting-edge technology to solve real-world problems.",
            'contact': "You can reach Anshul via email at anshul2006n@gmail.com or connect with him on LinkedIn, GitHub, Twitter, or Instagram. He's very responsive to inquiries and loves discussing new projects and opportunities. All his social links are available in the contact section above.",
            'experience': "Anshul is a passionate developer currently in his 3rd semester of Computer Science & Engineering. He focuses on creating engaging digital experiences and combines modern web development with AI automation to build innovative solutions for businesses. Despite being a student, he has hands-on experience with real-world projects.",
            'location': "Anshul is based in Bhopal, Madhya Pradesh, India, but works with clients globally on remote projects. He's comfortable with different time zones and has experience collaborating with international teams.",
            'academics': "Anshul is currently pursuing his Bachelor of Technology in Computer Science & Engineering. He's in his 3rd semester out of 8 total semesters, making him 37.5% complete with his degree. His academic journey includes coursework in programming fundamentals, data structures, OOP, database management, and computer networks.",
            'education': "Anshul is pursuing a 4-year B.Tech degree in Computer Science & Engineering. He has completed 2 semesters, is currently in his 3rd semester, and has 5 more semesters remaining. His studies cover core CS concepts, programming languages, algorithms, and emerging technologies."
        };

        let chatStarted = false;
        let messageCount = 0;

        async function sendMessage(event) {
            event.preventDefault();
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            console.log('sendMessage called with:', message);
            
            if (message) {
                if (!chatStarted) {
                    startChat();
                }
                addMessage(message, 'user');
                input.value = '';
                
                // Show typing indicator
                showTypingIndicator();
                
                try {
                    console.log('Calling generateResponse...');
                    // Get response from webhook
                    const response = await generateResponse(message);
                    console.log('Received response:', response);
                    hideTypingIndicator();
                    addMessage(response, 'bot');
                } catch (error) {
                    console.error('Error in sendMessage:', error);
                    hideTypingIndicator();
                    addMessage("I apologize, but I'm having trouble connecting to the server. Please try again later.", 'bot');
                }
            }
        }

        function quickMessage(message) {
            document.getElementById('messageInput').value = message;
            sendMessage(new Event('submit'));
        }

        function startChat() {
            chatStarted = true;
            
            // Add welcome message
            setTimeout(() => {
                addMessage("Hi! I'm Anshul's AI assistant. I can help you learn more about his skills, projects, academic journey, or discuss potential collaborations. What would you like to know?", 'bot');
            }, 500);
        }

        function showTypingIndicator() {
            const container = document.getElementById('chatMessagesContainer');
            const typingDiv = document.createElement('div');
            typingDiv.id = 'typingIndicator';
            typingDiv.className = 'message-bubble flex items-start space-x-3 py-8 px-4 max-w-4xl mx-auto';
            typingDiv.innerHTML = `
                <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-700">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                </div>
                <div class="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-4 max-w-xs border border-gray-700 glass-effect">
                    <div class="flex items-center space-x-1">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            `;
            container.appendChild(typingDiv);
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        function addMessage(message, sender) {
            const container = document.getElementById('chatMessagesContainer');
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message-bubble flex items-start space-x-3 py-8 px-4 max-w-4xl mx-auto';
            messageCount++;
            
            if (sender === 'user') {
                messageDiv.innerHTML = `
                    <div class="flex-1"></div>
                    <div class="bg-white text-black rounded-2xl rounded-tr-sm p-4 max-w-md glass-effect">
                        <p class="text-sm leading-relaxed">${message}</p>
                    </div>
                    <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-600">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-700">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <div class="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-4 max-w-md border border-gray-700 glass-effect">
                        <p class="text-sm leading-relaxed">${message}</p>
                    </div>
                `;
            }
            
            container.appendChild(messageDiv);
            
            // Smooth scroll to bottom with a slight delay for animation
            setTimeout(() => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }, 100);
        }

        async function generateResponse(message) {
            const webhookUrl = 'https://71245c5b4176.ngrok-free.app/webhook-test/bf0226c3-ef03-4eda-b40f-e7be75098038';
            
            console.log('Sending message to webhook:', message);
            
            try {
                // First, check if the webhook is accessible
                try {
                    console.log('Checking webhook availability...');
                    const checkResponse = await fetch(webhookUrl, {
                        method: 'OPTIONS',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log('OPTIONS response:', checkResponse.status);
                } catch (error) {
                    console.log('OPTIONS check failed:', error);
                }

                console.log('Making fetch request to:', webhookUrl);
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ 
                        message: message,
                        timestamp: new Date().toISOString(),
                        source: 'portfolio-chatbot'
                    })
                });

                console.log('Response status:', response.status);
                
                if (!response.ok) {
                    console.error('Response not OK:', response.status, response.statusText);
                    throw new Error(`Network response was not ok: ${response.status}`);
                }

                const data = await response.json();
                console.log('Received response data:', data);
                
                return data.response || "I apologize, but I couldn't process your request at the moment. Please try again later.";
                
            } catch (error) {
                console.error('Error in generateResponse:', error);
                return "I apologize, but I'm having trouble connecting to the server. Please try again later.";
            }
        }

        // Resume download functionality
        function downloadResume() {
            // Create a link to download the actual resume.pdf file
            const a = document.createElement('a');
            a.href = 'resume.pdf';
            a.download = 'resume.pdf';
            a.target = '_blank'; // Fallback to open in new tab if download fails
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

        // Mobile menu functionality
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.getElementById('menuIcon');
            const closeIcon = document.getElementById('closeIcon');
            
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        }
        
        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuIcon = document.getElementById('menuIcon');
            const closeIcon = document.getElementById('closeIcon');
            
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }

        // Add scroll animations with enhanced observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateX(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-card, .project-card, .semester-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) rotateX(10deg)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });

        // Animate progress ring on scroll
        const progressRing = document.querySelector('.progress-ring-circle');
        if (progressRing) {
            const academicsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate to 37.5% (3/8 semesters)
                        progressRing.style.strokeDashoffset = '196.35'; // 314.16 - (314.16 * 0.375)
                    }
                });
            }, { threshold: 0.5 });
            
            const academicsSection = document.getElementById('academics');
            if (academicsSection) {
                academicsObserver.observe(academicsSection);
            }
        }
        (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'989da593f72b3a37',t:'MTc1OTY3NDk0MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();