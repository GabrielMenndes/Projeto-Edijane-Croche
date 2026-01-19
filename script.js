        const drawerHandle = document.getElementById('drawerHandle');
        const closeBtn = document.getElementById('closeBtn');
        const sidebar = document.getElementById('sidebar');
        const toggleSidebarBtn = document.getElementById('toggleSidebar');

        if (toggleSidebarBtn) {
            toggleSidebarBtn.addEventListener('click', () => {
                const isOpen = sidebar.classList.toggle('active');
                toggleSidebarBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

        const openSidebar = () => sidebar.classList.add('active');
        const closeSidebar = () => sidebar.classList.remove('active');

        drawerHandle.addEventListener('click', () => {
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
        drawerHandle.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openSidebar();
            }
        });

        
        let isPointerDown = false;
        let startX = 0;

        drawerHandle.addEventListener('pointerdown', (event) => {
            isPointerDown = true;
            startX = event.clientX;
        });

        drawerHandle.addEventListener('pointermove', (event) => {
            if (!isPointerDown) return;
            const deltaX = event.clientX - startX;
            if (deltaX > 30) {
                openSidebar();
                isPointerDown = false;
            }
        });

        ['pointerup', 'pointercancel', 'pointerleave'].forEach((type) => {
            drawerHandle.addEventListener(type, () => {
                isPointerDown = false;
            });
        });

        closeBtn.addEventListener('click', closeSidebar);

    
        const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', closeSidebar);
        });

        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxClose = document.getElementById('lightboxClose');
        const galleryImages = document.querySelectorAll('.galeria-item img');

        const openLightbox = (src, alt) => {
            lightboxImage.src = src;
            lightboxImage.alt = alt || 'Imagem ampliada';
            lightbox.classList.add('open');
        };

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            lightboxImage.src = '';
        };

        galleryImages.forEach((img) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => openLightbox(img.src, img.alt));
        });

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && lightbox.classList.contains('open')) {
                closeLightbox();
            }
        });

        const carrinhoBtns = document.querySelectorAll('.button-carrinho');
        carrinhoBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const galeriaItem = btn.closest('.galeria-item');
                if (galeriaItem) {
                    const productName = galeriaItem.querySelector('p').textContent.trim();
                    const price = galeriaItem.querySelector('span').textContent.trim();
                    const message = `Olá, gostaria de saber mais sobre o produto: ${productName} ${price}`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/5571991061059?text=${encodedMessage}`;
                    btn.href = whatsappUrl;
                }
            });
        });