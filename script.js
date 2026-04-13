// ==========================================
// PORTFOLIO — GSAP ScrollTrigger + Lenis
// Bug-free scroll-driven animations
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    // ============================
    // LENIS — Smooth Scroll
    // ============================
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ============================
    // ANCHOR LINKS — Smooth scroll via Lenis
    // ============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return; // skip logo/top link

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                lenis.scrollTo(target, {
                    offset: 0,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
            }
        });
    });

    // ============================
    // TEXT SPLITTING UTILITY
    // ============================
    const statementEl = document.querySelector('.statement-text');
    if (statementEl) {
        const text = statementEl.innerText;
        statementEl.innerHTML = text.split(' ').map(word =>
            `<span class="word-wrapper" style="overflow:hidden; display:inline-block;">` +
            `<span class="word" style="display:inline-block;">${word}</span>` +
            `</span>`
        ).join(' ');
    }

    // ============================
    // GSAP MATCHMEDIA
    // ============================
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        // --- DESKTOP ONLY ---

        // Hero Parallax
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            gsap.to(heroTitle, {
                yPercent: -30,
                scale: 1.05,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // Skills Pinned Horizontal Scroll
        const skillsTrack = document.querySelector('.skills-pinned-track');
        const skillsSection = document.querySelector('.skills-pinned');
        if (skillsTrack && skillsSection) {
            const totalWidth = skillsTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.1);
            gsap.to(skillsTrack, {
                x: -totalWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: skillsSection,
                    pin: true,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });
        }

        // Footer Reveal
        const footer = document.querySelector('footer');
        if (footer) {
            const updateFooterMargin = () => {
                document.body.style.paddingBottom = `${footer.offsetHeight}px`;
            };
            window.addEventListener('resize', updateFooterMargin);
            updateFooterMargin();

            gsap.from('.footer-info', {
                y: 100,
                opacity: 0,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "footer",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1
                }
            });
        }

        return () => {
            document.body.style.paddingBottom = '0px';
        };
    });

    mm.add("(max-width: 768px)", () => {
        // --- MOBILE ONLY ---
        // Simple fade-in for skills (no horizontal scroll on mobile)
        const skillCards = document.querySelectorAll('.skill-category');
        skillCards.forEach(card => {
            gsap.fromTo(card,
                { y: 30, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.6,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Hero parallax (subtle)
        gsap.to('.hero-title', {
            opacity: 0,
            y: -50,
            scrollTrigger: {
                trigger: ".hero-section",
                start: "20% top",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // ============================
    // UNIVERSAL ANIMATIONS
    // ============================

    // Word Reveal (About statement)
    const statementWords = document.querySelectorAll('.statement-text .word');
    if (statementWords.length > 0) {
        gsap.set(statementWords, { y: "105%", opacity: 0 });
        gsap.to(statementWords, {
            opacity: 1,
            y: "0%",
            stagger: 0.03,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".about-statement",
                start: "top 85%",
                end: "bottom 30%",
                scrub: 0.5,
            }
        });
    }

    // Grid Parallax
    gsap.to('.grid-background', {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // ============================
    // EXPERIENCE CARDS — Using .exp-card
    // ============================
    const expCards = document.querySelectorAll('.exp-card');
    if (expCards.length > 0) {
        expCards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }

    // ============================
    // PROJECT CARDS — Using .proj-card
    // ============================
    const projCards = document.querySelectorAll('.proj-card');
    if (projCards.length > 0) {
        projCards.forEach((card, i) => {
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.7,
                    delay: i * 0.08,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }

    // ============================
    // CERTIFICATION ITEMS
    // ============================
    const certItems = document.querySelectorAll('.cert-item');
    if (certItems.length > 0) {
        certItems.forEach((item, i) => {
            gsap.fromTo(item,
                { y: 25, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 92%",
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }

    // Magnetic Button (Desktop)
    const magneticBtn = document.querySelector('.nav-cta .btn');
    if (magneticBtn && window.innerWidth > 768) {
        magneticBtn.addEventListener('mousemove', (e) => {
            const rect = magneticBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(magneticBtn, { x: x * 0.3, y: y * 0.3, duration: 0.5, ease: "power2.out" });
        });
        magneticBtn.addEventListener('mouseleave', () => {
            gsap.to(magneticBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
        });
    }

    // ============================
    // MOBILE MENU TOGGLE
    // ============================
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            menuBtn.innerHTML = isActive ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
            if (isActive) {
                lenis.stop();
            } else {
                lenis.start();
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                // Close menu first
                mobileMenu.classList.remove('active');
                menuBtn.innerHTML = '<i class="ph ph-list"></i>';
                lenis.start();
                
                // Scroll to target after menu closes
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        setTimeout(() => {
                            lenis.scrollTo(target, {
                                offset: 0,
                                duration: 1.5,
                                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            });
                        }, 400); // wait for menu close animation
                    }
                }
            });
        });
    }

    // Navbar Scrolled State
    ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
            if (self.scroll() > 50) {
                document.getElementById('navbar').classList.add('scrolled');
            } else {
                document.getElementById('navbar').classList.remove('scrolled');
            }
        }
    });

});
