(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),b=a(6),l=(a(0),a(134)),c={id:"python",title:"Python API"},r={id:"python",isDocsHomePage:!1,title:"Python API",description:"PyCylon",source:"@site/docs/python.md",permalink:"/docs/python",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python.md",sidebar:"someSidebar",previous:{title:"C++ API",permalink:"/docs/cpp"},next:{title:"Java API",permalink:"/docs/java"}},o=[{value:"Table API",id:"table-api",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Load a Table",id:"load-a-table",children:[]},{value:"Join",id:"join",children:[]},{value:"Union",id:"union",children:[]},{value:"Intersect",id:"intersect",children:[]},{value:"Subtract",id:"subtract",children:[]},{value:"Select",id:"select",children:[]}]},{value:"Python Examples",id:"python-examples",children:[]}],i={rightToc:o};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"pycylon"},"PyCylon"),Object(l.b)("p",null,"PyCylon is the Python binding for LibCylon (C++ Cylon). The uniqueness of PyCylon\nis that it can be used as a library or a framework. As a library, PyCylon seamlessly\nintegrates with PyArrow. This brings us the capability of providing the user the\ncompatibility with Pandas, Numpy and Tensors. As a framework we support distributed\nrelational algebra operations using MPI as the distributed backend. "),Object(l.b)("h2",{id:"table-api"},"Table API"),Object(l.b)("p",null,"PyCylon Table API currently offers a set of relational algebra operators to\npreprocess the data. "),Object(l.b)("h3",{id:"initialize"},"Initialize"),Object(l.b)("p",null,"In a Cylon programme, if you use Cylon with ",Object(l.b)("inlineCode",{parentName:"p"},"MPI")," backend, the initialization\nmust be done as follows;"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'ctx: CylonContext = CylonContext("mpi")\n')),Object(l.b)("p",null,"Without MPI, "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"ctx: CylonContext = CylonContext()\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-txt"}),"Note: In the current release, Cylon only supports MPI as a distributed backend \n")),Object(l.b)("h3",{id:"load-a-table"},"Load a Table"),Object(l.b)("p",null,"Using Cylon "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from pycylon.data.table import Table\nfrom pycylon.data.table import csv_reader\n\ntb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n")),Object(l.b)("p",null,"Using PyArrow and convert to PyCylon Table"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from pyarrow import csv\nfrom pycylon.data.table import Table\nfrom pyarrow import Table as PyArrowTable\n\npyarrow_tb: PyArrowTable = csv.read_csv('/tmp/csv.csv')\ncylon_tb = Table.from_arrow(pyarrow_tb)\n")),Object(l.b)("p",null,"Also a Cylon Table can be converted to a PyArrow Table"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"pyarrow_tb: PyArrowTable = Table.to_arrow(cylon_tb)\n")),Object(l.b)("h3",{id:"join"},"Join"),Object(l.b)("p",null,"Join API supports ",Object(l.b)("inlineCode",{parentName:"p"},"left, right, inner, outer' joins")," with\n",Object(l.b)("inlineCode",{parentName:"p"},"Hash")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Sort")," algorithms. User can specify these configs\nas using Python ",Object(l.b)("inlineCode",{parentName:"p"},"str"),". "),Object(l.b)("p",null,"Sequential Join"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\ntb2: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n\ntb3: Table = tb1.join(ctx, table=tb2, join_type='left', algorithm='hash', left_col=0, right_col=0)\n")),Object(l.b)("p",null,"Distributed Join"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb1: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\ntb2: Table = csv_reader.read(ctx, '/tmp/csv.csv', ',')\n\ntb3: Table = tb1.distributed_join(ctx, table=tb2, join_type='left', algorithm='hash', left_col=0, right_col=0)\n")),Object(l.b)("h3",{id:"union"},"Union"),Object(l.b)("p",null,"Sequential Union"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.union(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Union"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_union(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"intersect"},"Intersect"),Object(l.b)("p",null,"Sequential Intersect"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.intersect(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Intersect"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_intersect(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"subtract"},"Subtract"),Object(l.b)("p",null,"Sequential Subtract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb4: Table = tb1.subtract(ctx, table=tb2)\n")),Object(l.b)("p",null,"Distributed Subtract"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"tb5: Table = tb1.distributed_subtract(ctx, table=tb2)\n")),Object(l.b)("h3",{id:"select"},"Select"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-Note"}),"This is not yet supported from PyCylon API, but LibCylon supports this.\n")),Object(l.b)("h2",{id:"python-examples"},"Python Examples"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cylondata/cylon/blob/master/python/examples/cylon_simple_dataloader.py"}),"Simple Data Loading Benchmark")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/cylondata/cylon/blob/master/python/examples/cylon_sequential_mnist.py"}),"Sequential MNIST with PyTorch"))))}s.isMDXComponent=!0}}]);