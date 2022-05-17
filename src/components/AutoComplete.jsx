import '../style/AutoComplete.css'

function AutoComplete(props) {

  const onClick = (e) => {
    const element = document.getElementById('race');
    console.log(e.target.innerText);
    element.value = e.target.innerText;
  }

  return (
    <div className='autocomplete-container'>
      <ul className='autocomplete-list'>
        {props.suggestions.length > 0 ?
          props.suggestions.map((suggestion) =>
            <li className='autocomplete-item' onClick={onClick} key={suggestion}>{suggestion}</li>
          ) :
          null
        }
      </ul>
    </div>
  );
};

export default AutoComplete;
