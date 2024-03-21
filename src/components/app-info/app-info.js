import './app-info.css';
const AppInfo = ({employees, increased}) => {
    return(
        <div className={'app-info'}>
            <h1>Employee records at company 'N'</h1>
            <h2>{`Total number of employees: ${employees}`}</h2>
            <h2>{`The award will go to: ${increased}`}</h2>
        </div>
    );
}

export default AppInfo;