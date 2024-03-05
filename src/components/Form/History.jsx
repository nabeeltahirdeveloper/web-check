const transactions = [
    {
      id: 'AAPS0L',
        website: 'www.google.com',
        time: '2021-07-01 12:00:00',
        attempts: 3,
    },
    {
      id: 'AAPS0L',
        website: 'www.google.com',
        time: '2021-07-01 12:00:00',
        attempts: 3,
    },
    {
      id: 'AAPS0L',
        website: 'www.google.com',
        time: '2021-07-01 12:00:00',
        attempts: 3,
    },
    // More transactions...
  ]
  
  export default function History() {
    return (
<div style={{
  padding: '1rem', // px-4 py-4
  paddingLeft: '1.5rem', // sm:px-6
  paddingRight: '1.5rem', // sm:px-6
  paddingLeft: '2rem', // lg:px-8
  paddingRight: '2rem', // lg:px-8
  zIndex: '50',
  backgroundColor: '#1a2332',
  borderRadius: '0.375rem', // rounded-md
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1), 4px 4px 0px #0f1620',
  maxWidth: '50rem',
  width: '100%',
}}>
  <div style={{ display: 'flex', alignItems: 'center' }}> {/* sm:flex sm:items-center */}
    <div style={{ flex: '1 1 0%' }}> {/* sm:flex-auto */}
      <h1 style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '1.5rem', color: '#9fef00' }}>History</h1>
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'white' }}>
        Here is a list of all the websites you have visited and the number of attempts made to access them.
      </p>
    </div>
  </div>
  <div style={{ marginTop: '2rem' }}>
    <div style={{ margin: '-1rem', overflowX: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}> {/* sm:-mx-6 lg:-mx-8 */}
      <div style={{ display: 'inline-block', minWidth: '100%', padding: '0.5rem', verticalAlign: 'middle', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}> {/* sm:px-6 lg:px-8 */}
        <table style={{ minWidth: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{
                whiteSpace: 'nowrap',
                padding: '0.875rem',
                paddingLeft: '1rem', // pl-4
                paddingRight: '0.75rem', // pr-3
                textAlign: 'left',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#9fef00',
              }}>
                Website
              </th>
              <th style={{
                whiteSpace: 'nowrap',
                padding: '0.875rem',
                textAlign: 'left',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#9fef00',
              }}>
                Time
              </th>
              <th style={{
                whiteSpace: 'nowrap',
                padding: '0.875rem',
                textAlign: 'left',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#9fef00',
              }}>
                Attempts
              </th>
            </tr>
          </thead>
          <tbody style={{ borderColor: '#d2d6dc' /* divide-gray-300 */, backgroundColor: '#303b4f' }}>
          {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td 
                      style={{
                        whiteSpace: 'nowrap',
                        padding: '0.875rem',
                        paddingLeft: '1rem', // pl-4
                        paddingRight: '0.75rem', // pr-3
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        color: 'white',
                      
                      }}
                      >{transaction?.website}</td>
                      <td 
                      style={{
                        whiteSpace: 'nowrap',
                        padding: '0.875rem',
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        color: 'white',
                      
                      }}
                      >
                        {transaction?.time}
                      </td>
                      <td 
                      style={{
                        whiteSpace: 'nowrap',
                        padding: '0.875rem',
                        textAlign: 'left',
                        fontSize: '0.875rem',
                        color: 'white',
                      
                      
                      }}
                      >{transaction?.attempts}</td>
                      <td >
                        <p 
                        style={{
                          backgroundColor: '#9fef00',
                          margin: '5px',
                          borderRadius: '0.375rem', // rounded-md
                          textAlign: 'center',
                          color: '#1a2332',
                          padding: '0.5rem',
                        
                        }}
                        >

                        Open
                        </p>
                      </td>
                     
                    </tr>
                  ))}          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    )
  }
  