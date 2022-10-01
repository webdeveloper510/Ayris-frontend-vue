const getCsfrKey = () => {
  console.log(document.cookie);
  const name = "csrftoken";
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  console.log(parts.pop().split(";").shift());
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export default function authHeader() {
  let conf = JSON.parse(localStorage.getItem("conf"));
  console.log(conf);
  getCsfrKey();
  if (conf) {
    return {
      "X-CSRFToken": getCsfrKey(),
      // "x-access-token": user.acces_token,
    };
  } else {
    return {
      "Content-type": "application/json",
    };
  }
}
