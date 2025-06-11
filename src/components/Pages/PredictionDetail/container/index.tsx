'use client'

import { ROUTE_NAVIGATE } from '@/libs/enums'
import { Button } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

const boatColorClass = {
  1: 'bg-gray-200 text-black border border-black',
  2: 'bg-gray-700 text-white border border-white',
  3: 'bg-red-500 text-white',
  4: 'bg-blue-500 text-white',
  5: 'bg-yellow-400 text-black',
  6: 'bg-green-500 text-white',
}

type Prediction = {
  idPrediction: number
  lapsPrediction: number[][]
  symbols: string[]
}

type RoundData = {
  id: number
  predictions: Prediction[]
  confidentLevel: number
  oneWordComment: string
  comment: string
}

const predictionDetailData: RoundData[] = [
  {
    id: 1,
    predictions: [
      {
        idPrediction: 1,
        lapsPrediction: [[1], [3]],
        symbols: ['-'],
      },
      {
        idPrediction: 2,
        lapsPrediction: [[1], [4], [5]],
        symbols: ['=', '='],
      },
    ],
    confidentLevel: 1,
    oneWordComment: 'Nice',
    comment: 'This is the comment for the prediction',
  },
  {
    id: 2,
    predictions: [
      {
        idPrediction: 1,
        lapsPrediction: [[1], [2], [3, 4, 5, 6]],
        symbols: ['-', '='],
      },
      {
        idPrediction: 2,
        lapsPrediction: [[3], [1], [3, 4, 5, 6]],
        symbols: ['-', '='],
      },
      {
        idPrediction: 3,
        lapsPrediction: [[1, 2, 3, 5, 6], [4], [5, 6]],
        symbols: ['=', '='],
      },
      {
        idPrediction: 4,
        lapsPrediction: [[3], [1], [4, 5]],
        symbols: ['-', '='],
      },
    ],
    confidentLevel: 1,
    oneWordComment: `Hello`,
    comment: `It's me Mario!`,
  },
  {
    id: 3,
    predictions: [
      {
        idPrediction: 1,
        lapsPrediction: [[1], [2], [3, 4, 5, 6]],
        symbols: ['-', '='],
      },
      {
        idPrediction: 2,
        lapsPrediction: [[3], [1], [3, 4, 5, 6]],
        symbols: ['-', '='],
      },
      {
        idPrediction: 3,
        lapsPrediction: [[1, 2, 3, 5, 6], [4], [5, 6]],
        symbols: ['=', '='],
      },
      {
        idPrediction: 4,
        lapsPrediction: [[3], [1], [4, 5]],
        symbols: ['-', '='],
      },
    ],
    confidentLevel: 3,
    oneWordComment: `Nice`,
    comment: `It's me Jon!`,
  },
]

const PredictionDetailContainer = () => {
  const router = useRouter()

  const renderBoatBox = (number: number) => {
    return (
      <div
        className={`w-8 h-8 flex items-center justify-center font-bold rounded-sm ${boatColorClass[number as keyof typeof boatColorClass]}`}
      >
        {number}
      </div>
    )
  }

  const renderPrediction = (prediction: Prediction) => {
    return (
      <div className="flex items-center">
        {prediction.lapsPrediction.map((lap: number[], lapIndex: number) => (
          <React.Fragment key={lapIndex}>
            <div className="flex items-center">
              {lap.map((boat: number) => (
                <div key={boat} className="mx-0.5">
                  {renderBoatBox(boat)}
                </div>
              ))}
            </div>
            {lapIndex < prediction.symbols.length && (
              <span className="mx-1">{prediction.symbols[lapIndex]}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }

  const renderContentRound = ({ i, roundData }: { i: number; roundData?: RoundData }) => {
    return (
      <div className="w-10/12">
        {roundData ? (
          <>
            <div className="mb-4 flex flex-row align-middle">
              <span className="mr-2 min-w-10">予想:</span>
              <div className="flex flex-wrap">
                {roundData.predictions.map((prediction, index) => (
                  <div key={index} className={`flex items-center mr-10 mb-2`}>
                    {renderPrediction(prediction)}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <span className="mr-2">自信度:</span>
              <span>{roundData.confidentLevel}</span>
            </div>

            <div className="mb-4">
              <label htmlFor={`comment-one-word-${i}`} className="block text-sm font-medium">
                ひとことコメント:
              </label>
              <input
                type="text"
                id={`comment-one-word-${i}`}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={roundData.oneWordComment}
                readOnly
              />
            </div>

            <div className="mb-4">
              <label htmlFor={`comment-${i}`} className="block text-sm font-medium">
                コメント:
              </label>
              <input
                type="text"
                id={`comment-one-word-${i}`}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                defaultValue={roundData.comment}
                readOnly
              />
            </div>
          </>
        ) : (
          <span className="text-red-500 font-bold mr-4">予想が入力されていません</span>
        )}
      </div>
    )
  }

  const renderButtonPrediction = (hasPrediction: boolean) => {
    const goToEdit = () => router.push(ROUTE_NAVIGATE.EDIT_PREDICTION_DETAIL)

    return (
      <div className="w-2/12 flex justify-end items-start">
        {hasPrediction ? (
          <Button
            onClick={goToEdit}
            className="bg-green-500 text-white rounded-md m-0 text-ellipsis"
          >
            予想を修正
          </Button>
        ) : (
          <Button onClick={goToEdit} className="bg-green-500 text-white rounded-md m-0">
            予想を作成
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="mt-10">
      {Array.from({ length: 12 }, (_, i) => {
        const roundData = predictionDetailData[i]
        const hasPrediction = !!roundData

        return (
          <div key={i}>
            <div className="mb-8 flex flex-row">
              <h1 className="text-2xl font-bold mb-4 w-1/12">{i + 1} R</h1>
              <div className="flex flex-row w-full">
                {renderContentRound({ i, roundData })}
                {renderButtonPrediction(hasPrediction)}
              </div>
            </div>
            {i < 11 && <hr className="my-8" />}
          </div>
        )
      })}
    </div>
  )
}

export default PredictionDetailContainer
