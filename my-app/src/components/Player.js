import React from 'react'

function Player(props) {
  let telugumarks=Number(props.telugu);
  let hindimarks=Number(props.hindi);
  let englishmarks=Number(props.english);
  let mathsmarks=Number(props.maths);
  let sciencemarks=Number(props.science);
  let socialmarks=Number(props.social);
  let totalmarks=telugumarks+hindimarks+englishmarks+mathsmarks+sciencemarks+socialmarks;
  let percentage=(totalmarks/600)*100;
  return (
    <div className="div">
      <table className="table">
        <caption>{props.playername}</caption>
 <tr>
      <th>subject</th>
    <th>total marks</th>
    <th>marks</th>
    <th>result</th>
  </tr>
  <tr>
    <th>telugu</th>
    <td>100</td>
    <td>{telugumarks}</td>
    <td>{telugumarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>hindi</th>
    <td>100</td>
    <td>{hindimarks}</td>
    <td>{hindimarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>english</th>
    <td>100</td>
    <td>{englishmarks}</td>
    <td>{englishmarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>maths</th>
    <td>100</td>
    <td>{mathsmarks}</td>
    <td>{mathsmarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>science</th>
    <td>100</td>
    <td>{sciencemarks}</td>
    <td>{sciencemarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>social</th>
    <td>100</td>
    <td>{sciencemarks}</td>
    <td>{socialmarks>=35?"pass":"fail"}</td>
  </tr>
  <tr>
    <th>total</th>
    <td>600</td>
    <td>{totalmarks}({percentage}%)</td>
    <td>{totalmarks>=480?"gradeA":"gradeB"}</td>
  </tr>
  </table>
    </div>
  )
}

export default Player