import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Results(props) {
  if (props.results) {
    return (
      <div className="flex flex-col px-5">
        <h1 className="font-serif text-4xl text-slate-600 lowercase py-5 ">
          {props.results.word}
        </h1>

        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col px-5">
        <p className="font-serif text-4xl text-slate-600  py-5 ">
          Look for a word
        </p>
      </div>
    );
  }
}

export default Results;
