
  
  //alternative switch case;
function handleCase1() {
    console.log("Case 1 executed");
  }
  function handleCase2() {
    console.log("Case 2 executed");
  }
  function handleCase3() {
    console.log("Case 3 executed");
  }
  const caseHandlers = {
    'case1': handleCase1,
    'case2': handleCase2,
    'case3': handleCase3,
  };
  const caseValue = 'case2';
  if (caseHandlers[caseValue]) {
    caseHandlers[caseValue]();
  } else {
    console.log("Default case");
  }
  