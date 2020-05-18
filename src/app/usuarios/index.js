import React, { Component } from 'react'

export class Index extends Component {
  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Últimos usuários registrados</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Nome </th>
                        <th> Sobrenome </th>
                        <th> Genero </th>
                        <th> Email </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-medium"> 1 </td>
                        <td> Herman Beck </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 77.99 </td>
                        <td className="text-danger"> 53.64% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 2 </td>
                        <td> Messsy Adam </td>
                        <td>
                          Silva
                        </td>
                        <td> $245.30 </td>
                        <td className="text-success"> 24.56% <i className="mdi mdi-arrow-up"></i>
                        </td>
                        <td> July 1, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 3 </td>
                        <td> John Richards </td>
                        <td>
                          Silva
                        </td>
                        <td> $138.00 </td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> Apr 12, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 4 </td>
                        <td> Peter Meggik </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 77.99 </td>
                        <td className="text-danger"> 53.45% <i className="mdi mdi-arrow-down"></i>
                        </td>
                        <td> May 15, 2015 </td>
                      </tr>
                      <tr>
                        <td className="font-weight-medium"> 5 </td>
                        <td> Edward </td>
                        <td>
                          Silva
                        </td>
                        <td> $ 160.25 </td>
                        <td className="text-success"> 18.32% <i className="mdi mdi-arrow-up"></i>
                        </td>
                        <td> May 03, 2015 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
