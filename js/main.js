$(document).ready(function(){
    //fullpage
    $('#fullpage').fullpage({
        anchors:['intro','profile','web','edit','contact'],
        // sectionsColor:['#faf1eb','#faf1eb','#faf1eb','#faf1eb','#faf1eb'],
        //오른쪽, 왼쪽 에서 애니메이션 나타나게 해주는거
        //현재 섹션이 나타난후 (활성화 된 후, 열린 후)
        afterLoad:function(anchorLink, index){    //anchorLink: fullpage에서 사용하는 앵커 연결하라는 매개변수
            
            //index:fullpage 에서 사용하는 .section의 인덱스번호, 1부터 시작함
            //만약 활성화된 section이 첫번째 section이면
            if(index == 1){

            }else if(index == 2){
                //자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box > div').addClass('active');
            }else if(index == 3){
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
            }else if(index == 4){
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active');
            }else{
                //자식객체 애니메이션
                $('.contact h1').addClass('active');
                $('.contact .contact_wrap').addClass('active');
            }
            
        }
    });

    // 스킬바 복붙한거
    //https://codepen.io/Adam-Hsu/pen/aaVONo
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').delay(1300).animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
    //swiper slide
    var swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // editorial gallery
    $('.big_img ul li').hide();
    $('.big_img ul li').eq(0).show();
    $('.thum_img ul li').click(function(){
        var idx=$(this).index();
        $('.big_img ul li').hide();
        $('.big_img ul li').eq(idx).fadeIn();
    });
var timeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

function setDash(el) {
  if (el.nodeName === 'path') {
    el.style.dashArray = anime.setDashoffset(el);
    return [anime.setDashoffset(el) - 1, 0];
  }
  
  return 0;
}

var animations = [
  { name: '.t1', x: 195.47816, y: 152.84847, stroke: '#dd5d20' },
  { name: '.t2', x: 254.09133, y: 152.65768, stroke: '#0b9444' },
  { name: '.h1', x: 387.71374, y: 152.65768, stroke: '#1f91ac' },
  { name: '.h2', x: 383.47816, y: 210.44844, stroke: '#df871b' },
  { name: '.h3', x: 510.41374, y: 152.65768, stroke: '#1f91ac' },
  { name: '.h4', x: 507, y: 152.36218, fill: '#df871b' },
  { name: '.i1', x: 192.47816, y: 348.64847, stroke: '#dd5d20' },
  { name: '.i2', x: 188.47816, y: 463.85818, stroke: '#dd5d20' },
  { name: '.i3', x: 258.09133, y: 348.56614, stroke: '#1f91ac' },
  { name: '.i4', x: 254, y: 348.36218, fill: '#ffffff' },
  { name: '.n1', x: 387.71374, y: 348.36614, stroke: '#da3931' },
  { name: '.n2', x: 499.004, y: 348.36614, stroke: '#da3931' },
  { name: '.n3', x: 395.7, y: 348.46218, stroke: '#0b9444' },
  { name: '.n4', x: 391.70001, y: 348.66217, fill: '#da3931' },
  { name: '.n5', x: 503, y: 463.16217, fill: '#da3931' },
  { name: '.k1', x: 188.32637, y: 544.48746, stroke: '#da3931' },
  { name: '.k2', x: 200.31263, y: 659.5965, stroke: '#1f91ac' },
  { name: '.k3', x: 196.31264, y: 659.39655, fill: '#da3931' },
  { name: '.k4', x: 252.924, y: 599.49118, stroke: '#df871b' }
];

animations.forEach(function(animation, index) {
  if (animation.stroke) {
    timeline
    .add({
      targets: animation.name,
      stroke: {
        value: ['#000', animation.stroke],
        duration: 500,
        delay: 1000 + index * 30,
        easing: 'easeInOutQuad'
      },
      offset: 0
    });
  }
  if (animation.fill) {
    timeline
    .add({
      targets: animation.name,
      fill: {
        value: ['#000', animation.fill],
        duration: 500,
        delay: 1000 + index * 30,
        easing: 'easeInOutQuad'
      },
      offset: 0
    });
  }
  timeline
  .add({
    targets: animation.name,
    translateX: {
      value: [100 * (index % 4) - animation.x + 100, -100],
      duration: 500,
      delay: 1000 + index * 30,
      easing: 'easeInOutQuad'
    },
    translateY: {
      value: [100 * Math.floor(index / 4) - animation.y + 100, -100],
      duration: 500,
      delay: 1000 + index * 30,
      easing: 'easeInOutQuad'
    },
    offset: 0
  });
  timeline
  .add({
    targets: animation.name,
    strokeDashoffset: {
      value: setDash,
      duration: 800,
      delay: 1200 + index * 30,
      easing: 'easeInOutQuad'
    },
    offset: 0
  });
});

timeline
.add({
  targets: '.t1',
  opacity: 1,
  duration: 1000,
  delay: 4000,
  offset: 0
});

// 내비
feather.replace()


//새로운 인트로

$(document).ready(function() {

  //this is just used to draw and move all the elements
  
	for (i=1; i<=10; i++) {
		$('#star').append('<div class="latitude_line" id="lat_'+i+'_n"></div');
		$('#star').append('<div class="latitude_line" id="lat_'+i+'_s"></div');	

    // Radius of latitude line based on distance from "equator". That's the Pythagorean Theorem, son.
    c = (Math.sqrt( (250*250) - ((25*i)*(25*i))));

		// Width and height of line for offset
		width = c*2;
		height = c*2;
		dif = (500 - (c*2))/2;

		// Place & translate
		$('#lat_'+i+'_n').width(parseInt(c*2));
		$('#lat_'+i+'_n').height(parseInt(c*2));	
		$('#lat_'+i+'_n').css("top", dif+"px");
		$('#lat_'+i+'_n').css("left", dif+"px");		
		$('#lat_'+i+'_n').css("transform", "translate3d(0,0,"+ (i*25) + "px) ");		
    		$('#lat_'+i+'_n').css("-moz-transform", "translate3d(0,0,"+ (i*25) + "px) ");		
        		$('#lat_'+i+'_n').css("transform", "translate3d(0,0,"+ (i*25) + "px) ");		
		$('#lat_'+i+'_s').width(parseInt(c*2));
		$('#lat_'+i+'_s').height(parseInt(c*2));	
		$('#lat_'+i+'_s').css("top", dif+"px");
		$('#lat_'+i+'_s').css("left", dif+"px");			
		$('#lat_'+i+'_s').css("transform", "translate3d(0,0,"+ -(i*25) + "px) ");
		$('#lat_'+i+'_s').css("-moz-transform", "translate3d(0,0,"+ -(i*25) + "px) ");    
    		$('#lat_'+i+'_s').css("transform", "translate3d(0,0,"+ -(i*25) + "px) ");    
		
    if(i == 10){
      $('#lat_'+i+'_n').width(parseInt(c*2)+40);
      $('#lat_'+i+'_n').height(parseInt(c*2)+40);	
      $('#lat_'+i+'_n').css("top", dif-20+"px");
      $('#lat_'+i+'_n').css("left", dif-20+"px");		
      $('#lat_'+i+'_n').css("-webkit-transform", "translate3d(0,0,"+ (i*24) + "px) ");	
      $('#lat_'+i+'_n').css("-moz-transform", "translate3d(0,0,"+ (i*24) + "px) ");	
      $('#lat_'+i+'_n').css("transform", "translate3d(0,0,"+ (i*24) + "px) ");	
      $('#lat_'+i+'_s').width(parseInt(c*2)+40);
      $('#lat_'+i+'_s').height(parseInt(c*2)+40);	
      $('#lat_'+i+'_s').css("top", dif-20+"px");
      $('#lat_'+i+'_s').css("left", dif-20+"px");			
      $('#lat_'+i+'_s').css("-webkit-transform", "translate3d(0,0,"+ -(i*24) + "px) ");	
      $('#lat_'+i+'_s').css("-moz-transform", "translate3d(0,0,"+ -(i*24) + "px) ");	      
      $('#lat_'+i+'_s').css("transform", "translate3d(0,0,"+ -(i*24) + "px) ");	            
    }
		
}
	
	// Death Star Cannon
	// Was going to do this with math, but currently just doing it manually
		
  // Outer ring
  $('#star').append('<div class="gun_line" id="gun_'+i+'_n"></div');
  c = 85;
  width = c*2;
  height = c*2;
  dif = (500 - (c*2))/2;
  $('#gun_'+i+'_n').width(parseInt(c*2));
  $('#gun_'+i+'_n').height(parseInt(c*2));	
  $('#gun_'+i+'_n').css("top", dif+"px");
  $('#gun_'+i+'_n').css("left", dif+"px");		
  $('#gun_'+i+'_n').css("transform", "rotateX(-58deg) translate3d(0,0,"+ 245 + "px) ");		
    $('#gun_'+i+'_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0,"+ 245 + "px) ");		
    $('#gun_'+i+'_n').css("transform", "rotateX(-58deg) translate3d(0,0,"+ 245 + "px) ");		
  
  // Middle Ring
  $('#star').append('<div class="gun_line" id="gun_2_n"></div');
  c = 31;
  width = c*2;
  height = c*2;
  dif = (500 - (c*2))/2;
  $('#gun_2_n').width(parseInt(c*2));
  $('#gun_2_n').height(parseInt(c*2));	
  $('#gun_2_n').css("top", dif+"px");
  $('#gun_2_n').css("left", dif+"px");		
  $('#gun_2_n').css("-webkit-transform", "rotateX(-58deg) translate3d(0,0,"+ 238 + "px) ");
    $('#gun_2_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0,"+ 238 + "px) ");
      $('#gun_2_n').css("transform", "rotateX(-58deg) translate3d(0,0,"+ 238 + "px) ");
  
  // Inner Ring
  $('#star').append('<div class="gun_line" id="gun_3_n"></div');
  c = 10;
  width = c*2;
  height = c*2;
  dif = (500 - (c*2))/2;
  $('#gun_3_n').width(parseInt(c*2));
  $('#gun_3_n').height(parseInt(c*2));	
  $('#gun_3_n').css("top", dif+"px");
  $('#gun_3_n').css("left", dif+"px");		
  $('#gun_3_n').css("transform", "rotateX(-58deg) translate3d(0,0,"+ 236 + "px) ");
    $('#gun_3_n').css("-moz-transform", "rotateX(-58deg) translate3d(0,0,"+ 236 + "px) ");
      $('#gun_3_n').css("transform", "rotateX(-58deg) translate3d(0,0,"+ 236 + "px) ");

  
});

});