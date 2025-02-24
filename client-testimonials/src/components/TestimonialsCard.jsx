

function TestimonialsCard({name,text}) {
  return (
    <div>
        <div style={{border:"solid 3px white",borderRadius:"20px"}}>
            <h4>Name : {name}</h4>
            <p>Review : {text}</p>
        </div>
    </div>
  )
}

export default TestimonialsCard