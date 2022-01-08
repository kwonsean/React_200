import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

export default function R036Breadcrumbs() {
  return (
    <div id="top">
      <span>TOP</span>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#top">
          TOP
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#bottom">
          BOTTOM
        </BreadcrumbItem>
      </Breadcrumb>
      <div id="bottom" style={{ marginTop: 1000 }}>
        <span>bottom</span>
      </div>
    </div>
  )
}
