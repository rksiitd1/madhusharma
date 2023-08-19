<button onclick="scrollToTop()" id="scrollToTopButton" style="display: none; position: fixed; bottom: 20px; right: 20px; padding: 10px 20px; background-color: #3498db; color: #fff; border: none; cursor: pointer;">Top</button>

<script>
    // Function to scroll smoothly to the top of the page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Function to show the "Scroll to Top" button when scrolling down
    window.onscroll = function() {
        var button = document.getElementById('scrollToTopButton');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };
</script>
