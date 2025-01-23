import React, { useCallback, useState } from 'react'
import DragonQuestTitle from './views/DragonQuestTitle'
import { Match, When } from 'react-ui-components-example'
import DQNameInput from './views/DQNameInput'

export const GameView = React.memo(function GameView() {
    const [screen, setScreen] = useState<string>("start")
    const handleChangeScreen = useCallback((newScreen: string) => {
        setScreen(newScreen)
    }, [])

    return (
        <Match>
            <When exp={screen === "start"}>
                {screen}
                <DragonQuestTitle onChangeScreen={handleChangeScreen} />
            </When>
            <When exp={screen === "nameInput"}>
                <DQNameInput onChangeScreen={handleChangeScreen} />
            </When>
        </Match>
    )
})

export default GameView
