import React from "react";
import { formatDate } from '../../utils/javascript'


function GameInfo({ gameData }) {

  return (
    <div className="border border-darkColdBlue-300 text-darkColdBlue-90 rounded-md shadow-lg py-4">
      <h3 className="uppercase text-lightColdBlue-100 font-semibold font-poppins text-lg mb-4 px-2">
        {gameData.name}
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-darkColdBlue-400 text-left">
          <tbody>
            <tr className="hover:bg-darkColdBlue-300 transition-colors">
              <td className="px-4 py-3 font-semibold text-lightColdBlue-100">
                Release date:
              </td>
              <td className="px-4 py-3 text-lightColdBlue-200 font-medium">
                {formatDate(gameData.released)}
              </td>
            </tr>
            {gameData.publishers && (
              <tr className="hover:bg-darkColdBlue-300 transition-colors">
                <td className="px-4 py-3 font-semibold text-lightColdBlue-100">
                  Publishers:
                </td>
                <td className="px-4 py-3 text-lightColdBlue-200 font-medium">
                  {gameData.publishers.map((pub, index) => (
                    <span key={pub.id}>
                      {pub.name}
                      {index < gameData.publishers.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
            )}
            {gameData.developers && (
              <tr className="hover:bg-darkColdBlue-300 transition-colors">
                <td className="px-4 py-3 font-semibold text-lightColdBlue-100">
                  Developers:
                </td>
                <td className="px-4 py-3 text-lightColdBlue-200 font-medium">
                  {gameData.developers.map((dev, index) => (
                    <span key={dev.id}>
                      {dev.name}
                      {index < gameData.developers.length - 1 && ", "}
                    </span>
                  ))}
                </td>
              </tr>
            )}
            {gameData.playtime ? (
              <tr className="hover:bg-darkColdBlue-300 transition-colors">
                <td className="px-4 py-3 font-semibold text-lightColdBlue-100">
                  Playtime:
                </td>
                <td className="px-4 py-3 text-lightColdBlue-200 font-medium">
                  {gameData.playtime} Hours
                </td>
              </tr>
            ): null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GameInfo;
