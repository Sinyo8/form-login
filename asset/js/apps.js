$("#form .box-input input").on("input", () => {
  const inputValue = $("#form .box-input input").val();
});

$("#submit").on("click", (e) => {
  $("#form .box-input").append("password salah");

  e.preventDefault();
});
