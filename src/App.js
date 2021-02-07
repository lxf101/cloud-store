import './global.css';
import './index.css';
import 'element-theme-default';

import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import BottomBtn from './components/BottomBtn';

function App() {
  const files = [
    {
      id : '1',
      name : '文件1'
    },
    {
      id : '2',
      name : '文件2'
    },
    {
      id : '3',
      name : '文件3'
    },
    {
      id : '4',
      name : '文件4'
    },
    {
      id : '5',
      name : '文件5'
    }
  ];
  return (
    <div className="box">
        {/* left section */}
        <section className="left_section">
          <FileSearch title="云存储文档" onFileSearch={(value)=>{console.log(value);}}></FileSearch>
          <FileList files={files}></FileList>
          <BottomBtn></BottomBtn>
        </section>
        {/* right section */}
        <section className="right_section">
          <h1>this is the right section</h1>
        </section>
    </div>
  );
}

export default App;
