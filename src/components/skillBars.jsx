import React from 'react'

function SkillBars() {
    const langages = [ "Python", "JavaScript", "TypeScript"]
    const levels = [ 60, 55, 40]
    const bar_style = {
      backgroundColor: "gray", 
      height: "10px", 
      width: "300px", 
      marginTop: "auto", 
      marginBottom: "auto",
    }
  
    return (
      <div style={{ display: "flex" }}>
        <div>
          <p style={{fontWeight:"bold"}}>langage</p>
          {langages.map((langage) => {
            return (
              <div key={langage}>
                <p>{langage}</p>
              </div>
            )
          })}
        </div>
        <div>
          <p style={{fontWeight:"bold",marginLeft:"30px",}}>level </p>
          {levels.map((level) => {
            return (
              <div key={level} style={{margin:"25px 0px 0px 30px"}}>
                <div style={bar_style}><div style={{...bar_style,width:`${level}%`,backgroundColor:"blue"}}></div></div>
              </div>
  
            )
          })}
        </div>
      </div>
    )
}

export default SkillBars;
