import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import StartGameScreen from '../screens/StartGameScreen';
import GameScreen from '../screens/GameScreen';
import GameOver from '../screens/GameOver';

const NumberNavigator = createStackNavigator({
    StartGame: StartGameScreen,
    Game: GameScreen,
    GameOver: GameOver
});

export default createAppContainer(NumberNavigator);