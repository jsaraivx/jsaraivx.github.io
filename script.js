// ==========================================
// PORTFOLIO INTERACTIVITY SCRIPT
// Engineering Minimalism
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Scroll Effect ---
    const header = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Active Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    const navCta = document.querySelector('.nav-cta');
    let menuOpen = false;
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            
            if (menuOpen) {
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '100%';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.width = '100%';
                navLinksContainer.style.background = 'var(--bg-light)';
                navLinksContainer.style.padding = '1.5rem 2rem';
                navLinksContainer.style.borderBottom = '1px solid var(--border-light)';
                navLinksContainer.style.borderRadius = '0';
                navLinksContainer.style.gap = '0.5rem';

                // Style links for mobile
                navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = 'var(--text-dark)';
                    link.style.padding = '0.6rem 0';
                });

                // Show CTA on mobile
                if (navCta) {
                    navCta.style.display = 'block';
                    navCta.style.position = 'absolute';
                    navCta.style.top = `calc(100% + ${navLinksContainer.offsetHeight}px)`;
                }

                menuBtn.innerHTML = '<i class="ph ph-x"></i>';
            } else {
                navLinksContainer.style = '';
                if (navCta) navCta.style = '';
                menuBtn.innerHTML = '<i class="ph ph-list"></i>';
            }
        });

        // Close menu on link click
        navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) {
                    menuOpen = false;
                    navLinksContainer.style = '';
                    if (navCta) navCta.style = '';
                    menuBtn.innerHTML = '<i class="ph ph-list"></i>';
                }
            });
        });
    }
});
