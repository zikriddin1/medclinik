window.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll',function(){
        const header = this.document.querySelector('.header-fix');
        header.classList.toggle('sticky',window.scrollY>0)
    });
const scrollBtn = document.querySelector('.topMenuBtn');
window.addEventListener('scroll',function(){
    scrollBtn.classList.toggle('active',window.scrollY>400)
});
scrollBtn.addEventListener('click',function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    myFunction();
});
window.myFunction = function(event) {
document.querySelectorAll('.header-ul li a.active').forEach(function(item) {
    item.classList.remove('active');
  })
    event.target.classList.add("active");
  };
})

