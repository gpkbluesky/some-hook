 const scrollToMatch = useCallback(() => {
    const maskId = `${cellmaskPrefix}${searchMatch[currentMatchIndex - 1]}`;
    const maskElement = document.getElementById(maskId);
    const containerElement =
      document.getElementsByClassName('ant-table-body')[0];
    if (maskElement && containerElement) {
      const {
        left: containerLeft,
        top: containerTop,
        right: containerRight,
        bottom: containerBottom,
      } = containerElement.getBoundingClientRect();
      const {
        left: maskLeft,
        top: maskTop,
        right: maskRight,
        bottom: maskBottom,
      } = maskElement.getBoundingClientRect();
      let newLeft: number | undefined = undefined,
        newTop: number | undefined = undefined;
      if (maskLeft <= containerLeft) {
        newLeft = 0;
      }
      if (maskRight > containerRight) {
        newLeft = maskLeft - (maskRight - containerRight);
      }
      if (maskTop <= containerTop) {
        newTop = 0;
      }
      if (maskBottom > containerBottom) {
        newTop = maskTop - (maskBottom - containerBottom);
      }
      containerElement.scroll({
        left: newLeft,
        top: newTop,
        behavior: 'smooth',
      });
    }
  }, [currentMatchIndex, searchMatch]);
