document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const segments = document.querySelectorAll('.name');
    const options = {
        root: null,
        threshold: 0.75,
        rootMargin: "100px"

    }
    function removeActiveClass() {
        const elements = document.querySelectorAll('.btn.active');
        elements.forEach((element) => {
          element.classList.remove('active');
        });
      }
    // console.log(segments);
    // How to change the color of the navigation bar.
    buttons.forEach(button => {
        button.addEventListener('click', (evt) => {
            buttons.forEach(button => {
                button.classList.remove("active");
            })
            button.classList.toggle('active');
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        })
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry);
                console.log(entry.target);
                const targetId = entry.target.id;
                console.log(targetId);
                const activeButton = document.querySelector(`.btn[data-target="${targetId}"]`);
                console.log(activeButton);
                removeActiveClass();
                activeButton.classList.add('active');

            }
            // segments.forEach((segment)=>{
            //     observer.unobserve(segment);
            // })
        }, options)
    })
    segments.forEach(segment => {
        observer.observe(segment);
    })
    // observer.observe(segments[0]);  
})







