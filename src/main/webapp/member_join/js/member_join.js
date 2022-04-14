/* 
작성자: 김나연
작성완료일: 22/04/04
페이지명: 회원가입
*/

$(document).ready(function () {
  //제이쿼리 정규식 표현
  //이메일
  var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
  //비밀번호
  var passwdCheck = RegExp(
    /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/
  );
  //닉네임
  var nickNameCheck = RegExp(/^[가-힣a-zA-Z0-9]{2,10}$/);
  //휴대폰
  var phoneCheck = RegExp(/^01[0179][0-9]{7,8}$/);

  $("form").submit(function () {
    //이메일 공백 확인
    if ($("#e_mail").val() == "") {
      swal({ icon: "info", title: "이메일을 입력해주세요" }).then(function () {
        $("#e_mail").focus();
      });
      return false;
    }

    //이메일 유효성 검사
    if (!emailCheck.test($("#e_mail").val())) {
      swal({ icon: "info", title: "이메일형식에 맞게 입력해주세요" }).then(
        function () {
          $("#e_mail").val("");
          $("#e_mail").focus();
        }
      );
      return false;
    }

    //비밀번호 공백 확인
    if ($("#pwd").val() == "") {
      swal({ icon: "info", title: "비밀번호를 입력해주세요" }).then(
        function () {
          $("#pwd").focus();
        }
      );
      return false;
    }

    //비밀번호 유효성검사
    if (!passwdCheck.test($("#pwd").val())) {
      swal({ icon: "info", title: "비밀번호 형식에 맞게 입력해주세요" }).then(
        function () {
          $("#pwd").val("");
          $("#pwd").focus();
        }
      );
      return false;
    }

    //비밀번호 확인 - 공백 확인
    if ($("#re_pwd").val() == "") {
      swal({ icon: "info", title: "비밀번호 확인을 입력해주세요" }).then(
        function () {
          $("#re_pwd").focus();
        }
      );
      return false;
    }

    //비밀번호 똑같은지
    if ($("#pwd").val() != $("#re_pwd").val()) {
      swal({ icon: "info", title: "비밀번호가 틀립니다" }).then(function () {
        $("#pwd").val("");
        $("#re_pwd").val("");
        $("#pwd").focus();
      });
      return false;
    }

    //닉네임 공백 확인
    if ($("#name").val() == "") {
      swal({ icon: "info", title: "닉네임을 입력해주세요" }).then(function () {
        $("#name").focus();
      });
      return false;
    }

    //닉네임 유효성 검사
    if (!nickNameCheck.test($("#name").val())) {
      swal({ icon: "info", title: "닉네임 형식에 맞게 입력해주세요" }).then(
        function () {
          $("#name").val("");
          $("#name").focus();
        }
      );
      return false;
    }

    //휴대폰 공백 확인
    if ($("#p_num").val() == "") {
      swal({ icon: "info", title: "휴대폰 번호를 입력해주세요" }).then(
        function () {
          $("#p_num").focus();
        }
      );
      return false;
    }

    //휴대폰 유효성 검사
    if (!phoneCheck.test($("#p_num").val())) {
      swal({
        icon: "info",
        title: "휴대폰 번호 형식에 맞게 입력해주세요",
      }).then(function () {
        $("#p_num").val("");
        $("#p_num").focus();
      });
      return false;
    }
  });
});

//도움말 펼치기
$(document).ready(function () {
  $("#form_helper1").hide();
  $("#form_helper2").hide();
  $("#form_helper3").hide();
  $("#form_helper4").hide();
  $("#form_helper5").hide();

  $("#e_mail").click(function () {
    $("#form_helper1").show();
  });

  $("#pwd").click(function () {
    $("#form_helper2").show();
  });

  $("#re_pwd").click(function () {
    $("#form_helper3").show();
  });

  $("#name").click(function () {
    $("#form_helper4").show();
  });

  $("#p_num").click(function () {
    $("#form_helper5").show();
  });
});

// 실시간 도움말 유효성 검사
// $(document).ready(function(){
//   //제이쿼리 정규식 표현
//   //이메일
//   var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
//   //비밀번호
//   var passwdCheck = RegExp(
//     /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/
//   );
//   //닉네임
//   var nickNameCheck = RegExp(/^[가-힣a-zA-Z0-9]{2,10}$/);
//   //휴대폰
//   var phoneCheck = RegExp(/^01[0179][0-9]{7,8}$/);

//   //한글 이름 검사
//   $('#e_mail').on('change keyup paste',function(){
//     if($('#e_mail').val() == ''){
//       $( '#form_helper1' ).addClass( 'good' );
//       return false;
//     });
//   });

// if(!getKorName.test($('#kor_name').val())){
//   alert('한글이름은 한글로만 입력해주세요.');
//   $('#kor_name').val('');
//   $('#kor_name').focus();
//   return false;
