const reason = [
  "QUYẾT TÂM CHỌN LÀ KHÔNG À?",
  "NẾU KHÔNG NHÌN NHẦM CHẮC LÀ CẬN RỒI @.@, ĐEO KÍNH VÀO RỒI CHỌN",
  "EM CÓ NHÌN NHẦM KHÔNG? CHỌN LẠI ĐI ^^",
];

function noClick() {
  console.log("click no");
  document.getElementById("no").style.backgroundColor =
    "rgba(181, 244, 255, 0.5)";
  document.getElementById("no").style.top = `${Math.floor(
    Math.random() * 90
  )}%`;
  document.getElementById("no").style.left = `${Math.floor(
    Math.random() * 80
  )}%`;
  if (reason.length > 0) {
    document.getElementById("question").innerHTML = reason.pop();
  } else {
    document.getElementById("question").innerHTML = "HAHA VẬY THÌ THÔI VẬY :D";
  }
}

const question = [
  {
    name: "phoneNumber",
    content: "CHO ANH XIN SỐ ĐIỆN THOẠI ĐỂ TIỆN LIÊN LẠC?",
  },
  {
    name: "address",
    content: "CHO ANH XIN ĐỊA CHỈ?",
  },
  {
    name: "time",
    content: "EM RẢNH VÀO MẤY GIỜ?",
  },
];
const formData = new FormData();
const data = {};
function yesClick() {
  console.log("Click yes");
  document.getElementById("no").remove();
  document.getElementById("yes").remove();
  document.getElementById("form").style.display = "block";
  const popQuestion = question.pop();
  document.getElementById("question").innerHTML = popQuestion.content;
  document.getElementById("input").name = popQuestion.name;
}

function nextClick() {
  const name = document.getElementById("input").name;
  const value = document.getElementById("input").value;
  data[name] = value;
  const popQuestion = question.pop();
  if (popQuestion) {
    document.getElementById("question").innerHTML = popQuestion.content;
    document.getElementById("input").name = popQuestion.name;
    document.getElementById("input").value = "";
  } else {
    document.getElementById("next").remove();
    document.getElementById("input").remove();
    document.getElementById("question").hidden = true;
    document.getElementById("send").style.display = "block";
  }
}

function confirmClick() {
  const url = "/answer";
  const other_params = {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    method: "POST",
  };
  fetch(url, other_params)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("question").hidden = false;
      document.getElementById("question").innerHTML = "❤️❤️❤️❤️❤️";
      document.getElementById("send").style.display = "none";
    });
}
