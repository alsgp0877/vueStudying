
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale-1.0, maximum-scale=1.0, minimum-scale=1.0">
  <script src="https://unpkg.com/vue"></script>
</head>
<body>
  <!--0313~14-->
  <!-- vue는 어떻게 데이터가 흘러가느냐가 제일 중요 -->
  <!--v-model: input이랑 vue를 연결,양방향 바인딩-->
  <!--v-on: 이벤트 리스너의 역할-->

  <!--전체적으로 쓸 태그(레이아웃)을 지정하고 바뀔 데이터중심으로 설정-->
  <!--모든 화면을 만들어놓고 데이터만 넣어서 바꾼다 -->


  <div id="app">
    <div>{{word}}</div><!--1-->
    <form v-on:submit="onSubmitForm">//v로 시작하는 것들 뒤에 "" 따옴표들은 vue로 접근이 가능하다는 뜻.
      <input type ="text" v-model="value" ref="answer"><!--2-->//ref : 어쩔수없이 접근해야할때 태그에 이름을 붙여주는 용도 ,데이터를 바꾸는게아닌 애매한 이벤트를 사용할때 
      <button type="submit">입력</button>
    </form>
    <div id="result">{{result}}</div><!--3-->
  </div>
</body>
</html>

//0410 component는 'data:'를 중요하게 본다
<script>
new Vue({
  el: '#app',//vue가 app을 통제할수 있도록 해준다.
  data:{
  	word:'제로초',//vue는 데이터만 관리한다.
    result:'',
    value:''
  },
  methods:{
  	onSubmitForm(e){
    e.preventDefault();<!-- form은 리로드 되면서 데이터가 없어지기 때문에 고정-->
     if(this.word[this.word.length-1] === this.value[0]){
     	 this.result='정답';
       this.word = this.value;
       this.$refs.answer.focus();
     }else{
     	 this.result='땡';
       this.value='';
     }
    },
  },
})
</script>
