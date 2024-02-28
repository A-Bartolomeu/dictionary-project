import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Results(props) {
  if (props.results && props.results.word) {
    return (
      <div className="flex flex-col px-5">
        <h1 className="font-serif text-5xl text-slate-700 lowercase pt-4 pb-2 px-4">
          {props.results.word}
        </h1>

        <div className="flex">
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </div>

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
    return null;
  }
}

export default Results;
