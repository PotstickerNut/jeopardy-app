const GetQuestion = (props) => {
  const { question, value, answer, category, isVisible } = props;
  return (
    <div>
      <h2>Let's Play</h2>
      <button onClick={props.handleGetQuestion} className="get-question">
        Get Question
      </button>
      <div className="category">
        <h3 className="title">Category:</h3>{" "}
        <p className="display">{category}</p>
      </div>

      <div className="points">
        <h4 className="title">Points:</h4> <p className="display">{value}</p>
      </div>

      <div className="question">
        <h4 className="title">Question:</h4>
        <p className="display">{question}</p>
      </div>

      <button onClick={props.handleReveal} className="reveal">
        Click to Reveal Answer
      </button>
      <div className="answer" style={isVisible ? null : "display: none"}>
        <h3 className="title">Answer:</h3> <h4 className="display">{answer}</h4>
      </div>
    </div>
  );
};

export default GetQuestion;
