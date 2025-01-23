import { useCallback } from "react"
import { useAppContext } from "../../context/AppContext"

export const useScreen = () => {
    const { appData, updateAppData } = useAppContext()
    const screen = appData.screen
    const setScreen = useCallback((newScreen: string) => {
        updateAppData(prev => ({
            ...prev,
            screen: newScreen
        }))
    }, [updateAppData])
    return {
        screen,
        setScreen
    }
}
