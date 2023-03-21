//토글버튼
let tog_btn=document.querySelector('.toggle');
tog_btn.addEventListener('click',()=>{
  document.querySelector('.t_wrap').classList.add('on02');
  // document.querySelector('.t_wrap').innerHTML+='<div class="on03"></div>';
  // div 요소를 생성
  let insertDiv = document.createElement('div');
  // 생성한 div 요소에 on03 클래스 추가
  insertDiv.classList.add('on03');
  // 부모노드.insertBefore(삽입 할 노드, 기준 점 노드);
  // header노드에 형제로 뒤에 삽입됨
  document.querySelector('.t_wrap').insertBefore(insertDiv, document.querySelector('header'));

  console.log(document.querySelector('.t_wrap'));
})
//닫기버튼
let close_btn=document.querySelector('aside>div>a');
close_btn.addEventListener('click',()=>{
  document.querySelector('.t_wrap').classList.remove('on02');
  document.querySelector('.on03').remove();
})
//nav서식
let n_btn=document.querySelectorAll('.nav > li');
for(let i=1; i<n_btn.length;i++){
  n_btn[i].addEventListener('click',function(){
    this.querySelector('.s_nav').classList.toggle('active');
    this.querySelector('a>img').classList.toggle('on01');
  })
}