import { createContext, useCallback, useState } from "react"

const appDefault = {
    screen: "start",
}

type AppDefault = {
    screen: string,
}

type AppContextType = {
    appData: AppDefault,
    updateAppData: (updateFn: (prevData: AppDefault) => AppDefault) => void,
}

export const defaultAppContext: AppContextType = {
    appData: appDefault,
    updateAppData: () => { },
}
export const AppContext = createContext<AppContextType>(defaultAppContext)

export const useAppContext = () => {
    const [appData, setAppData] = useState(appDefault)
    const updateAppData = useCallback((updateFn: (prevData: AppDefault) => AppDefault) => {
        setAppData(prevData => {
            return updateFn(prevData)
        })
    }, [])
    console.log("appData", appData)
    return {
        appData,
        updateAppData
    }
}
