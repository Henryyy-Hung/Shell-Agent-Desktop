import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  TextareaHTMLAttributes
} from 'react'

interface AutoHeightTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // 可以添加其他自定义属性
}

const AutoHeightTextarea = forwardRef<HTMLTextAreaElement, AutoHeightTextareaProps>(
  (props, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    // 函数用于调整 textarea 高度
    const adjustHeight = (): void => {
      const textarea = textareaRef.current
      if (textarea) {
        // 重置高度
        textarea.style.height = '0px'
        const { scrollHeight } = textarea

        // 获取最大高度（如果有设置）
        const computedStyle = window.getComputedStyle(textarea)
        const { maxHeight } = computedStyle

        if (maxHeight && maxHeight !== 'none') {
          const maxHeightValue = parseInt(maxHeight, 10)
          if (scrollHeight > maxHeightValue) {
            // 超过最大高度时，设置为最大高度并显示滚动条
            textarea.style.height = maxHeight
            textarea.style.overflowY = 'auto'
            return
          }
        }

        // 未超过最大高度时，隐藏滚动条
        textarea.style.height = `${scrollHeight}px`
        textarea.style.overflowY = 'hidden'
      }
    }

    // 使用 useImperativeHandle 来处理 ref 转发
    useImperativeHandle(ref, () => textareaRef.current!, [])

    // 处理输入事件
    const handleInput = (event: React.FormEvent<HTMLTextAreaElement>): void => {
      adjustHeight()
      // 如果父组件传入了 onInput 回调，则调用它
      if (props.onInput) {
        props.onInput(event)
      }
    }

    // 处理 onChange 事件
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
      adjustHeight()
      // 如果父组件传入了 onChange 回调，则调用它
      if (props.onChange) {
        props.onChange(event)
      }
    }

    // 初始调整高度和监听 value 变化
    useEffect(() => {
      adjustHeight()
    }, [props.value])

    // 组件挂载后初始调整
    useEffect(() => {
      adjustHeight()
    }, [])

    return (
      <textarea
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={textareaRef}
        onInput={handleInput}
        onChange={handleChange}
        style={{
          resize: 'none',
          overflow: 'hidden', // 防止滚动条出现
          ...props.style
        }}
      />
    )
  }
)

AutoHeightTextarea.displayName = 'AutoHeightTextarea'

export default AutoHeightTextarea
