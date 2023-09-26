const LeaderboardData =  [{
  username: 'user1',
  score: 100
},
{
  username: 'user2',
  score: 200,
},
{
  username: 'user3',
  score: 300,
},
{
  username: 'user4',
  score: 400,
},
{
  username: 'user5',
  score: 500,
},
{
  username: 'user6',
  score: 600,
},
{
  username: 'user7',
  score: 700,
},
{
  username: 'user8',
  score: 800,
},
{
  username: 'user9',
  score: 900,
},
{
  username: 'user10',
  score: 1000,
},
]

function Leaderboard() {
  return (
        
    <div className='border-white border border-double w-full min-h-full'>
    <div className='text-white w-full bg-slate-900 py-1 text-center'>Leaderboard 😎</div>
    {LeaderboardData.map((data, index) => {
      return (
        <div key={index} className='flex justify-between text-white px-2 py-1'>
          <div className='flex'>
            <div className='text-white mr-2'>{index + 1}.</div>
            <div>{data.username}</div>
          </div>
          <div>{data.score}</div>
        </div>
      )
    }
    )}
    </div>
  )
}

export default Leaderboard