import './app-filter.css';
const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'To be promoted'},
        {name: 'moreThen1000', label: 'Salary over $1000'}
    ];

    const buttons = buttonsData.map(({name, label}) =>{
        const active = props.filter === name;
        return(
            <button className={`btn ${active ? 'btn-light' : 'btn-outline-light'}`}
                    type={"button"}
                    key = {name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}</button>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;