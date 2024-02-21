const genCode = () => {
    let code = '';
    while (code.length < 1000) {
      code = code.concat(Math.floor(Math.random() * 2));
    }
    return code;
  }
  
  let check = Array.from(document.getElementsByClassName("check"))
  
  function checkall() {
    if (check[2].checked) {
      check[0].checked = true
      check[1].checked = true
    }
  }
  function hack() {
    let side = Array.from(document.getElementsByClassName("side1"));
    let clear1 = setInterval(() => {
      side[0].innerHTML = genCode();
    }, 300)
    let clear2 = setInterval(() => {
      side[1].innerHTML = genCode();
    }, 300)
    let text = Array.from(document.getElementsByClassName("text"))
    let target = document.getElementById("target").value;
    
    // Async Await 
    
    const hackapi = async function() {
      // clear screen
      {
        for (let i = 1; i < text.length; i++) {
          text[i].innerHTML = " "
        }
      }
      // screen cleared
  
      let step1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[1].innerHTML = "Hacking user..."
          resolve(1)
        }, 1300)
      })
      let step2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML = "user located"
          resolve(1)
        }, 2200)
      })
      let step1a = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML = `username:${target} ; `
          resolve(1)
        }, 2000)
      })
      let step1b = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML += ` password:XXXXXXXXX ;`
          resolve(1)
        }, 2500)
      })
      let step1c = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML += ` number:+91XXXXXXXXXX`
          resolve(1)
        }, 2200)
      })
      let step3 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[3].innerHTML = "getting device info..."
          resolve(1)
        }, 3400)
      })
      if (check[0].checked) {
        let step5 = await new Promise((resolve, reject) => {
          setTimeout(() => {
            text[4].innerHTML = "facebook hacked"
            resolve(1)
          }, 2300)
        })
      }
      if (check[1].checked) {
        let step5 = await new Promise((resolve, reject) => {
          setTimeout(() => {
            text[4].innerHTML = "Instagram hacked"
            resolve(1)
          }, 2500)
        })
      }
      let step5 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[4].innerHTML = "resetting passwords..."
          resolve(1)
        }, 2900)
      })
      let step6 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML = "access granted to phone"
          resolve(1)
        }, 2500)
      })
      let step7 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[2].innerHTML = "logs generated"
          resolve(1)
        }, 2600)
      })
      let step8 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[5].innerHTML = "hacking status: pending..."
          resolve(1)
        }, 2700)
      })
      let step9 = await new Promise((resolve, reject) => {
        setTimeout(() => {
          text[5].innerHTML = "hacking status: hacked! succesfully -_+"
          resolve(1)
          clearInterval(clear1)
          clearInterval(clear2)
          side.forEach((x) => {
            x.innerHTML = "Hacker Man"
          })
        }, 8000)
      })
    }
    hackapi()
  }
  
  
  