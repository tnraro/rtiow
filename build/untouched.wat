(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (import "env" "memory" (memory $0 0))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 16392))
 (global $~lib/memory/__heap_base i32 (i32.const 16392))
 (table $0 1 funcref)
 (elem $0 (i32.const 1))
 (export "render" (func $assembly/index/render))
 (export "memory" (memory $0))
 (func $assembly/index/render (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 f64)
  (local $9 f64)
  i32.const 0
  local.set $2
  loop $for-loop|0
   local.get $2
   local.get $1
   i32.lt_u
   local.set $3
   local.get $3
   if
    i32.const 0
    local.set $4
    loop $for-loop|1
     local.get $4
     local.get $0
     i32.lt_u
     local.set $5
     local.get $5
     if
      local.get $1
      i32.const 1
      i32.sub
      local.get $2
      i32.sub
      local.set $6
      local.get $6
      local.get $0
      i32.mul
      local.get $4
      i32.add
      i32.const 4
      i32.mul
      local.set $7
      local.get $4
      f64.convert_i32_u
      local.get $0
      i32.const 1
      i32.sub
      f64.convert_i32_u
      f64.div
      local.set $8
      local.get $2
      f64.convert_i32_u
      local.get $1
      i32.const 1
      i32.sub
      f64.convert_i32_u
      f64.div
      local.set $9
      local.get $7
      local.get $8
      f64.const 255.999
      f64.mul
      i32.trunc_f64_u
      i32.store8
      local.get $7
      i32.const 1
      i32.add
      local.get $9
      f64.const 255.999
      f64.mul
      i32.trunc_f64_u
      i32.store8
      local.get $7
      i32.const 2
      i32.add
      f64.const 0.25
      f64.const 255.999
      f64.mul
      i32.trunc_f64_u
      i32.store8
      local.get $7
      i32.const 3
      i32.add
      i32.const 255
      i32.store8
      local.get $4
      i32.const 1
      i32.add
      local.set $4
      br $for-loop|1
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
 )
)
