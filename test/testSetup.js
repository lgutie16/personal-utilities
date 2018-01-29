import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

//React 16 adapter
Enzyme.configure({adapter: new Adapter()})


//Make Enzyme fucntions available in all test files 
global.shallow = shallow
global.render = render
global.mount = mount


