// Initially Class component, To Be converted into function component using react hooks
import React from 'react';

const Table = (props) => {
	return (
		<table className="table table-hover">
			<thead>
				<tr>
					{
						props.reportColumns.map((columnDetail, index) => {
							return (
								<React.Fragment key={index}>
									<th>{columnDetail.labelKey}</th>
								</React.Fragment>
							)
						})
					}
				</tr>
			</thead>
			<tbody>
				{
					(props.gridData.length > 0) ? props.gridData.map((data, index) => {
						return (
							<tr key={index}>
								{
									props.reportColumns.map((columnDetail, index) => {
										return (
											<td key={index}>{data[columnDetail.valueKey]}</td>
										)
									})
								}
							</tr>
						)
					})
						: <tr>
							<td colSpan={props.reportColumns.length} style={{ textAlign: "center" }}>No Data Available</td>
						</tr>
				}
			</tbody>
		</table>
	)
}

export default Table;

// class Table extends React.Component {

//   render() {
//     return (
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             {
//               this.props.reportColumns.map((columnDetail, index) => {
//                 return (
//                   <React.Fragment key={index}>
//                     <th>{columnDetail.labelKey}</th>
//                   </React.Fragment>
//                 )
//               })
//             }
//           </tr>
//         </thead>
//         <tbody>
//           {
//             (this.props.gridData.length > 0) ? this.props.gridData.map((data, index) => {
//               return (
//                 <tr key={index}>
//                   {
//                     this.props.reportColumns.map((columnDetail, index) => {
//                       return (
//                         <td key={index}>{data[columnDetail.valueKey]}</td>
//                       )
//                     })
//                   }
//                 </tr>
//               )
//             })
//               : <tr>
//                 <td colSpan={this.props.reportColumns.length} style={{ textAlign: "center" }}>No Data Available</td>
//               </tr>
//           }
//         </tbody>
//       </table>
//     )
//   }
// }

