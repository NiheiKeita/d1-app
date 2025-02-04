import React from "react"

type Props = {
    onChangeScreen: (screen: string) => void
}

export const Game = React.memo<Props>(function Game({
    onChangeScreen
}) {

    return (<>test</>)
})

export default Game
