!function(){"use strict";var e,r;let t;let a="https://unpkg.com/@ffmpeg/core@".concat("0.12.6","/dist/umd/ffmpeg-core.js");(r=e||(e={})).LOAD="LOAD",r.EXEC="EXEC",r.WRITE_FILE="WRITE_FILE",r.READ_FILE="READ_FILE",r.DELETE_FILE="DELETE_FILE",r.RENAME="RENAME",r.CREATE_DIR="CREATE_DIR",r.LIST_DIR="LIST_DIR",r.DELETE_DIR="DELETE_DIR",r.ERROR="ERROR",r.DOWNLOAD="DOWNLOAD",r.PROGRESS="PROGRESS",r.LOG="LOG",r.MOUNT="MOUNT",r.UNMOUNT="UNMOUNT";let s=Error("unknown message type"),E=Error("ffmpeg is not loaded, call `await ffmpeg.load()` first");Error("called FFmpeg.terminate()");let o=Error("failed to import ffmpeg-core.js"),c=async r=>{let{coreURL:s,wasmURL:E,workerURL:c}=r,l=!t;try{s||(s=a),importScripts(s)}catch(e){if(s||(s=a.replace("/umd/","/esm/")),self.createFFmpegCore=(await import(s)).default,!self.createFFmpegCore)throw o}let n=s,R=E||s.replace(/.js$/g,".wasm"),i=c||s.replace(/.js$/g,".worker.js");return(t=await self.createFFmpegCore({mainScriptUrlOrBlob:"".concat(n,"#").concat(btoa(JSON.stringify({wasmURL:R,workerURL:i})))})).setLogger(r=>self.postMessage({type:e.LOG,data:r})),t.setProgress(r=>self.postMessage({type:e.PROGRESS,data:r})),l},l=e=>{let{args:r,timeout:a=-1}=e;t.setTimeout(a),t.exec(...r);let s=t.ret;return t.reset(),s},n=e=>{let{path:r,data:a}=e;return t.FS.writeFile(r,a),!0},R=e=>{let{path:r,encoding:a}=e;return t.FS.readFile(r,{encoding:a})},i=e=>{let{path:r}=e;return t.FS.unlink(r),!0},f=e=>{let{oldPath:r,newPath:a}=e;return t.FS.rename(r,a),!0},F=e=>{let{path:r}=e;return t.FS.mkdir(r),!0},L=e=>{let{path:r}=e,a=t.FS.readdir(r),s=[];for(let e of a){let a=t.FS.stat("".concat(r,"/").concat(e)),E=t.FS.isDir(a.mode);s.push({name:e,isDir:E})}return s},m=e=>{let{path:r}=e;return t.FS.rmdir(r),!0},p=e=>{let{fsType:r,options:a,mountPoint:s}=e,E=t.FS.filesystems[r];return!!E&&(t.FS.mount(E,a,s),!0)},u=e=>{let{mountPoint:r}=e;return t.FS.unmount(r),!0};self.onmessage=async r=>{let a,{data:{id:o,type:D,data:O}}=r,S=[];try{if(D!==e.LOAD&&!t)throw E;switch(D){case e.LOAD:a=await c(O);break;case e.EXEC:a=l(O);break;case e.WRITE_FILE:a=n(O);break;case e.READ_FILE:a=R(O);break;case e.DELETE_FILE:a=i(O);break;case e.RENAME:a=f(O);break;case e.CREATE_DIR:a=F(O);break;case e.LIST_DIR:a=L(O);break;case e.DELETE_DIR:a=m(O);break;case e.MOUNT:a=p(O);break;case e.UNMOUNT:a=u(O);break;default:throw s}}catch(r){self.postMessage({id:o,type:e.ERROR,data:r.toString()});return}a instanceof Uint8Array&&S.push(a.buffer),self.postMessage({id:o,type:D,data:a},S)}}(),_N_E={};