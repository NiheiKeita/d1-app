
import { ALL_SCALES, MusicalScale } from '@/hooks/audio/type'
import React, { useState } from 'react'

export const MusicalSequenceEditor = React.memo(function MusicalSequenceEditor() {


    const [inputValue, setInputValue] = useState<string>("")
    const [sequence, setSequence] = useState<MusicalScale[]>([])
    const [suggestions, setSuggestions] = useState<MusicalScale[]>([])

    const handleInputChange = (value: string) => {
        setInputValue(value)
        setSuggestions(
            ALL_SCALES.filter((scale) =>
                scale.toLowerCase().startsWith(value.toLowerCase())
            )
        )
    }

    const handleAddNote = (note: MusicalScale) => {
        setSequence([...sequence, note])
        setInputValue("")
        setSuggestions([])
    }

    const handleRemoveNote = (index: number) => {
        setSequence(sequence.filter((_, i) => i !== index))
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
                <h1 className="mb-4 text-2xl font-bold text-gray-800">音符エディター</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="音符を入力 (例: C4)"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                        className="w-full rounded-lg border p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {suggestions.length > 0 && (
                        <ul className="mt-2 max-h-40 overflow-y-auto rounded-lg border bg-white shadow-lg">
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    onClick={() => handleAddNote(suggestion)}
                                    className="cursor-pointer p-2 hover:bg-blue-100"
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="rounded-lg bg-gray-50 p-4 shadow-inner">
                    <h2 className="mb-2 text-lg font-semibold text-gray-700">
                        現在のシーケンス
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {sequence.length > 0 ? (
                            sequence.map((note, index) => (
                                <span
                                    key={index}
                                    onClick={() => handleRemoveNote(index)}
                                    className="cursor-pointer rounded-lg bg-blue-100 px-3 py-1 text-blue-800 transition hover:bg-red-100 hover:text-red-800"
                                >
                                    {note}
                                </span>
                            ))
                        ) : (
                            <p className="text-gray-500">音符がありません。</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
})
export default MusicalSequenceEditor

