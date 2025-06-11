'use client'

import { renderCells } from '@/libs/utils'
import { Button, Table } from '@payloadcms/ui'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const NUMBERS = [1, 2, 3, 4, 5, 6]
const SYMBOLS = ['-', '=']

type Prediction = {
  id: number
  lapsPrediction: number[][]
  symbols: string[]
}

const predictionsData: Prediction[] = [
  {
    id: 1,
    lapsPrediction: [[1, 2], [4], [1, 2, 3, 4, 5, 6]],
    symbols: ['-', '-'],
  },
]

const EditPredictionDetailContainer = () => {
  const router = useRouter()
  const [predictions, setPredictions] = useState([...predictionsData])

  const [confidence, setConfidence] = useState('')
  const [shortComment, setShortComment] = useState('')
  const [comment, setComment] = useState('')

  const handleNumberClick = (predictionIdx: number, lapIdx: number, num: number) => {
    setPredictions((prev) =>
      prev.map((prediction, pIdx) => {
        if (pIdx !== predictionIdx) return prediction
        const lap = prediction.lapsPrediction[lapIdx] ?? []
        const newLap = lap?.includes(num) ? lap.filter((n) => n !== num) : [...lap, num]

        newLap.sort((a, b) => a - b)
        const newLapsPrediction = [...prediction.lapsPrediction]
        newLapsPrediction[lapIdx] = newLap
        return { ...prediction, lapsPrediction: newLapsPrediction }
      }),
    )
  }

  const handleAllClick = (predictionIdx: number, lapIdx: number) => {
    setPredictions((prev) =>
      prev.map((prediction, pIdx) => {
        if (pIdx !== predictionIdx) return prediction
        const allNumbers = [1, 2, 3, 4, 5, 6]
        const lap = prediction.lapsPrediction[lapIdx] ?? []
        const isAll = lap.length === 6 && allNumbers.every((n) => lap.includes(n))
        const newLapsPrediction = [...prediction.lapsPrediction]
        newLapsPrediction[lapIdx] = isAll ? [] : allNumbers
        return { ...prediction, lapsPrediction: newLapsPrediction }
      }),
    )
  }

  const handleSymbolClick = (predictionIdx: number, symbolIdx: number, symbol: string) => {
    setPredictions((prev) =>
      prev.map((prediction, pIdx) => {
        if (pIdx !== predictionIdx) return prediction
        const newSymbols = [...prediction.symbols]
        newSymbols[symbolIdx] = symbol
        return { ...prediction, symbols: newSymbols }
      }),
    )
  }

  const onAddPrediction = () => {
    const newPrediction = {
      id: predictions.length + 1,
      lapsPrediction: [[], [], []],
      symbols: [],
    }

    setPredictions([...predictions, newPrediction])
  }

  const submitEdit = () => {
    router.back()
  }

  const renderPredictionBoard = ({
    lapsPrediction,
    predictionIdx,
    lapIdx,
  }: {
    lapsPrediction: number[]
    predictionIdx: number
    lapIdx: number
  }) => {
    const isAll =
      lapsPrediction.length === 6 && [1, 2, 3, 4, 5, 6].every((n) => lapsPrediction.includes(n))
    return (
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3 gap-1 mb-1">
          {NUMBERS.map((boat, index) => {
            return (
              <Button
                key={index}
                className={`m-0 w-10 h-10 border border-gray-400  text-black text-lg p-0 min-w-0 min-h-0 ${lapsPrediction?.includes(boat) ? 'bg-yellow-100' : 'bg-white'}`}
                onClick={() => handleNumberClick(predictionIdx, lapIdx, boat)}
              >
                {boat}
              </Button>
            )
          })}
        </div>
        <Button
          className={`m-0 w-10 h-10 border border-gray-400  text-black text-lg p-0 min-w-0 min-h-0 ${isAll ? 'bg-yellow-100' : 'bg-white'}`}
          onClick={() => handleAllClick(predictionIdx, lapIdx)}
        >
          全
        </Button>
      </div>
    )
  }

  const renderSymbol = (currentSymbol: string, predictionIdx: number, symbolIdx: number) => {
    return (
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-1 mb-1">
          {SYMBOLS.map((symbol, index) => {
            return (
              <Button
                key={index}
                className={`m-0 w-10 h-10 border border-gray-400 text-l text-black p-0 min-w-0 min-h-0 ${currentSymbol === symbol ? 'bg-yellow-100' : 'bg-white'}`}
                onClick={() => handleSymbolClick(predictionIdx, symbolIdx, symbol)}
              >
                {symbol}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="bg-[#34495e] text-white p-2 font-bold mb-4">7R 予想修正</div>
      <div className="flex flex-col items-start">
        <Table
          data={predictions}
          columns={[
            {
              active: true,
              accessor: 'prediction',
              field: { name: 'prediction', type: 'text' },
              Heading: <div></div>,
              renderedCells: renderCells(predictions, (item, idx) => (
                <p className="font-bold text-2xl">予想{predictions[idx]?.id}</p>
              )),
            },
            {
              active: true,
              accessor: 'lap1',
              field: { name: 'lap1', type: 'text' },
              Heading: <p className="items-center text-center">1着</p>,
              renderedCells: renderCells(predictions, (item, idx) =>
                renderPredictionBoard({
                  lapsPrediction: item.lapsPrediction[0] ?? [],
                  predictionIdx: idx,
                  lapIdx: 0,
                }),
              ),
            },
            {
              active: true,
              accessor: 'linkage1',
              field: { name: 'linkage1', type: 'text' },
              Heading: null,
              renderedCells: renderCells(predictions, (item, idx) =>
                renderSymbol(item.symbols[0] ?? '', idx, 0),
              ),
            },
            {
              active: true,
              accessor: 'lap2',
              field: { name: 'lap2', type: 'text' },
              Heading: <p className="items-center text-center">2着</p>,
              renderedCells: renderCells(predictions, (item, idx) =>
                renderPredictionBoard({
                  lapsPrediction: item.lapsPrediction[1] ?? [],
                  predictionIdx: idx,
                  lapIdx: 1,
                }),
              ),
            },
            {
              active: true,
              accessor: 'linkage2',
              field: { name: 'linkage2', type: 'text' },
              Heading: <div></div>,
              renderedCells: renderCells(predictions, (item, idx) =>
                renderSymbol(item.symbols[1] ?? '', idx, 1),
              ),
            },
            {
              active: true,
              accessor: 'lap3',
              field: { name: 'lap3', type: 'text' },
              Heading: <p className="items-center text-center">3着</p>,
              renderedCells: renderCells(predictions, (item, idx) =>
                renderPredictionBoard({
                  lapsPrediction: item.lapsPrediction[2] ?? [],
                  predictionIdx: idx,
                  lapIdx: 2,
                }),
              ),
            },
          ]}
        />

        <Button
          className="mb-10 px-3 py-1 rounded border border-gray-400  text-black bg-gray-100 hover:bg-gray-200 text-xl"
          onClick={onAddPrediction}
        >
          予想を追加
        </Button>
        <div className="mb-6 flex w-full items-center">
          <label className="mr-2 w-1/12">自信度</label>
          <select
            value={confidence}
            onChange={(e) => setConfidence(e.target.value)}
            className="p-1 rounded border w-1/6 border-gray-400"
          >
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="mb-6 flex w-full">
          <label className="mr-2 w-1/12">ひとことコメント</label>
          <input
            type="text"
            value={shortComment}
            onChange={(e) => setShortComment(e.target.value)}
            className="w-11/12 p-1 rounded border border-gray-400"
          />
        </div>
        <div className="mb-6 w-full flex">
          <label className="mr-2 w-1/12">コメント</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-11/12 h-20 p-1 rounded border border-gray-400 mt-1"
          />
        </div>
        <Button
          onClick={submitEdit}
          className="px-6 py-1 rounded border border-gray-400 bg-green-400 hover:bg-green-500 text-white font-bold"
        >
          保存
        </Button>
      </div>
    </div>
  )
}

export default EditPredictionDetailContainer
