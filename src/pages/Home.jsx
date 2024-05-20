import React from 'react'

function Home() {
  return (
    <div className='p-5'>
        <h2>Today's Chart</h2>

        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer name</th>
                    <th>Custmer Phone number</th>
                    <th>Vehicle Number</th>
                    <th>Service</th>
                    <th>Notes</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Ajith</td>
                <td>98765434567</td>
                <td>KL 01 BB 3454</td>
                <td>Oil change</td>
                <td>Check</td>
                <td>1000</td>
                <td>Finished</td>
                <td>Ajith</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Home