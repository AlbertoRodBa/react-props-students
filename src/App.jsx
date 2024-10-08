import Student from './Student.jsx'

function App() {
    return(
        <>
            <Student name="Spongebob" age={30} isStudent={true}/>  {/* Estudiante 1 */}
            <Student name="Patrick" age={42} isStudent={false}/>   {/* Estudiante 2 */}
            <Student name="Squidward" age={50} isStudent={false}/> {/* Estudiante 3 */}
            <Student name="Sandy" age={27} isStudent={true}/>      {/* Estudiante 4 */}
            <Student /> {/* Estudiante por defecto (Guest) */}
        </>
    );
}

export default App
