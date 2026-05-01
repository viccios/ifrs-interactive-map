import { Mapa } from "./components/mapa"
import { FaSearch } from 'react-icons/fa'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import simbolo from './components/img/simbulo_IF.png'
import { BsDashCircle } from "react-icons/bs";

const itemStyle = {
  background: 'white',
  padding: '8px',
  borderRadius: '6px',
  cursor: 'pointer',
}




function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <div style={{ width: '100%', height: '100%' }}>
          <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr 3fr', boxSizing: 'border-box', padding: '10px' }}>
            <div style={{ background: '#34373a', borderTopLeftRadius: '15px', borderEndStartRadius: '15px', boxSizing: 'border-box', padding: '10px' }}>
              <div style={{ border: '2px solid black', height: '100%', width: '100%', boxSizing: 'border-box', padding: '10px' }}>
                <div style={{ border: '2px solid black', height: '100%', width: '100%', display: 'grid', gridAutoRows: '1fr 3fr' }}>
                  <div style={{ display: 'grid', gridAutoRows: '1fr 1fr' }}>
                    <div style={{ height: '111px' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', height: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                          <button style={{ height: '20px', width: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <MdKeyboardDoubleArrowLeft size={24} />
                          </button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                          <div style={{ height: '70%', width: '90%', display: 'grid', gridTemplateColumns: '1fr 4fr', gap: '2px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                              <div style={{ height: '55px', width: '55px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px', border: '2px solid black' }}>
                                <img src={simbolo} alt="descrição" style={{ height: '50px' }} />
                              </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                              <h1 style={{ color: 'green', textAlign: 'center' }}> Instituto Federal</h1>
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                          <BsDashCircle size={21} />
                        </div>
                      </div>
                    </div>

                    <div style={{height: '100%', width: '100%', display: 'grid', gridAutoRows: '1fr 1fr' }}>



                      <div style={{ padding: '10px', boxSizing: 'border-box', width: '100%'}}>

                        {/* Inicio da barra de pesquisa e opções mais usadas*/}

                        <div style={{display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '8px', padding: '8px', marginBottom: '15px'}}>
                          <input type="text" placeholder="Local..." style={{ border: 'none', outline: 'none', width: '100%',  fontSize: '14px', height: '25px'}} />
                          <button style={{background: 'none', border: 'none'}}>
                            <FaSearch/>
                          </button>
                        </div>
                        {/* Se virem para fazer a lista de itens funcionais, isso é só um exemplo*/}
                        <div style={{ display: 'flex', flexDirection:'row', gap: '8px' }}>
                          <div style={itemStyle}>Biblioteca</div>
                          <div style={itemStyle}>Cantina</div>
                          <div style={itemStyle}>Laboratórios</div>
                          <div style={itemStyle}>Banheiros</div>

                        </div>

                        {/* Fim da barra de pesquisa e opções mais usadas*/}





                      </div>


                    </div>



                  </div>
                  <div style={{ background: 'pink' }}></div>
                </div>
              </div>
            </div>
            <div style={{ background: '#34373a', boxSizing: 'border-box', padding: '10px', borderTopRightRadius: '15px', borderBottomRightRadius: '15px' }}>
              <Mapa />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
