(function () {
    if (!Array.isArray(window.gallery)) return;

    var container = document.getElementById("cardContainer");
    if (!container) return;

    gallery.forEach(function (g, i) {
        container.innerHTML +=
            "<div class=\"col-12 col-md-6 col-lg-4 mb-4\">" +
            "<div class=\"card bp-card card-fixed collage-item shadow-sm\" id=\"g" + i + "\"" +
            " onmouseenter=\"addShadow(this)\" onmouseleave=\"removeShadow(this)\">" + "<div class=\"collage-image-wrapper\">" +
            "<img src=\"" + g.image + "\" class=\"card-img-top collage-image\">" +
            "</div>" +
            "<div class=\"card-body collage-body\">" +
            "<h5 class=\"card-title collage-title\">" + g.title + "</h5>" +
            "<h6 class=\"card-subtitle mb-2 text-muted collage-year\">" + (g.year || '') + "</h6>" +
            "<p class=\"card-text collage-text\">" + g.description + "</p>" +
            "</div>" +
            "</div>" +
            "</div>";
    });

    window.addShadow = function (el) {
        el.classList.add('shadow-lg', 'border-0');
    };
    window.removeShadow = function (el) {
        el.classList.remove('shadow-lg', 'border-0');
    };

    let colorMode = localStorage.getItem('bp-theme') || 'dark';

    function applyTheme(mode) {
        const logo = document.getElementById('siteLogo');
        const topBar = document.getElementById('topBar');
        const body = document.body;

        if (logo) logo.src = (mode === 'dark')
            ? 'images/blackpink_logoW.png'
            : 'images/blackpink_logoB.png';

        if (topBar) {
            topBar.classList.toggle('bg-dark', mode === 'dark');
            topBar.classList.toggle('text-bg-dark', mode === 'dark');
            topBar.classList.toggle('bg-light', mode === 'light');
        }

        if (body) {
            body.style.background = (mode === 'dark')
                ? "linear-gradient(135deg, #ff4fa3 0%, #000000 100%)"
                : "linear-gradient(135deg, #ff4fa3 0%, #ffffff 100%)";
        }

        const modeBtn = document.getElementById('modeBtn');
        if (modeBtn) modeBtn.textContent = (mode === 'dark') ? 'Light' : 'Dark';
    }

    window.changeMode = function () {
        colorMode = (colorMode === 'dark') ? 'light' : 'dark';
        localStorage.setItem('bp-theme', colorMode);
        document.documentElement.setAttribute('data-bs-theme', colorMode);
        applyTheme(colorMode);
    };

    document.documentElement.setAttribute('data-bs-theme', colorMode);
    applyTheme(colorMode);

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            links.forEach(l => l.removeAttribute('aria-current'));
            link.setAttribute('aria-current', 'page');
        });
    });
})();
