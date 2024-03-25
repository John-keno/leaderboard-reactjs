import React from 'react'

export default function TableBody({data, notFirst}) {
  return (
    <tbody>
          {data.map((country, index) => (
            <tr key={country.id}>
              <td>
                <fieldset className={notFirst === "notfirst"? 'notfirst':''}>
                  <legend>{country.id}</legend>
                </fieldset>
              </td>
              <td>
                <fieldset className={notFirst === "notfirst"? 'notfirst':''}>
                  <legend>{country.name}</legend>
                </fieldset>
              </td>
              <td>
                <fieldset className={notFirst === "notfirst"? 'notfirst':''}>
                  <legend>{country.path}</legend>
                </fieldset>
              </td>
              <td>
                <fieldset className={notFirst === "notfirst"? 'notfirst':''}>
                  <legend>{country.score}</legend>
                </fieldset>
              </td>
            </tr>
          ))}
        </tbody>
  )
}
