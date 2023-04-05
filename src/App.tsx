import { useDispatch } from "react-redux";
import { setName } from "./redux/reducers/userReducer";
import { setThemeStatus } from "./redux/reducers/themeReducer";

import { useAppSelector } from "./redux/hooks/useAppSelector";


function App() {
     const dispatch = useDispatch();

     const user =  useAppSelector(state => state.user );
     const theme = useAppSelector(state => state.theme)

     const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme))

     const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch( setName(e.target.value) );
    }
    const handleSwitchTheme = () => {
          switchTheme(theme.status === 'light' ? 'dark' : 'light')
    }


  return (
    <div>
     Meu nome é {user.name} e tenho {user.age} anos <br />
     Tema: {theme.status}     
     <hr />
     <input type="text" value={user.name} onChange={handleNameInput} />

     <hr />
     <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
